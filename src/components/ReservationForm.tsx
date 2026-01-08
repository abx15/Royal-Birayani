import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  Users,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const reservationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid phone number" })
    .max(15, { message: "Phone number must be less than 15 characters" }),
  date: z.date({ required_error: "Please select a date for your reservation" }),
  time: z.string({ required_error: "Please select a time slot" }),
  guests: z.string({ required_error: "Please select number of guests" }),
  specialRequests: z
    .string()
    .max(500, { message: "Special requests must be less than 500 characters" })
    .optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

const timeSlots = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "10+"];

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    },
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);

    // Save to LocalStorage
    const reservations = JSON.parse(
      localStorage.getItem("reservations") || "[]"
    );
    const newReservation = {
      ...data,
      id: Date.now(),
      status: "pending",
      timestamp: new Date().toISOString(),
    };
    reservations.push(newReservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create WhatsApp message with encoded data
    const message = encodeURIComponent(
      `🍽️ *Table Reservation Request*\n\n` +
        `👤 *Name:* ${data.name}\n` +
        `📧 *Email:* ${data.email}\n` +
        `📱 *Phone:* ${data.phone}\n` +
        `📅 *Date:* ${format(data.date, "EEEE, MMMM do, yyyy")}\n` +
        `🕐 *Time:* ${data.time}\n` +
        `👥 *Guests:* ${data.guests}\n` +
        `${
          data.specialRequests
            ? `📝 *Special Requests:* ${data.specialRequests}`
            : ""
        }`
    );

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Reservation Request Sent!",
      description:
        "We've saved your request and will confirm shortly via WhatsApp.",
    });

    // Open WhatsApp with the reservation details
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");

    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-xl shadow-card p-6 md:p-8 border border-border"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-utensils text-2xl text-primary"></i>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          Reserve Your <span className="text-secondary italic">Table</span>
        </h3>
        <p className="text-muted-foreground text-sm">
          Book your royal dining experience in advance
        </p>
      </div>

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-3xl text-accent"></i>
          </div>
          <h4 className="font-display text-xl font-semibold text-foreground mb-2">
            Reservation Request Sent!
          </h4>
          <p className="text-muted-foreground">
            We'll confirm your booking shortly via WhatsApp.
          </p>
        </motion.div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Phone Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+91 98765 43210"
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-border focus:border-primary focus:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date & Time Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-foreground font-medium flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-primary" />
                      Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal bg-background border-border hover:bg-muted",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-card border-border z-[100]"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() ||
                            date >
                              new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Time
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-border z-[100]">
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                          Lunch (11 AM - 3 PM)
                        </div>
                        {timeSlots.slice(0, 8).map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground border-t border-border mt-1 pt-2">
                          Dinner (6 PM - 10 PM)
                        </div>
                        {timeSlots.slice(8).map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Guests */}
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Number of Guests
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-card border-border z-[100]">
                      {guestOptions.map((guests) => (
                        <SelectItem key={guests} value={guests}>
                          {guests}{" "}
                          {guests === "1"
                            ? "Guest"
                            : guests === "10+"
                            ? "or more Guests"
                            : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Special Requests */}
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Special Requests (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any dietary requirements, celebrations, or special arrangements..."
                      className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-royal text-lg py-6"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Processing...
                </>
              ) : (
                <>
                  <i className="fas fa-calendar-check mr-2"></i>
                  Confirm Reservation
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              By submitting, you'll be redirected to WhatsApp to confirm your
              booking.
              <br />
              We'll respond within 30 minutes during business hours.
            </p>
          </form>
        </Form>
      )}
    </motion.div>
  );
};

export default ReservationForm;
