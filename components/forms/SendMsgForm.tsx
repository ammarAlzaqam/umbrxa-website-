"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendMessageValidationSchema } from "@/lib/validation";
import z from "zod";
import toast from "react-hot-toast";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ImSpinner9 } from "react-icons/im";

export default function SendMsgForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(SendMessageValidationSchema),
  });

  const onSubmit = async (
    values: z.infer<typeof SendMessageValidationSchema>
  ) => {
    try {
      setLoading(true);
      console.log(values);
      await new Promise((res) => setTimeout(res, 3000));
      toast.success("Message has been sended successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong: Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="form sm:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="form-label">Name</FormLabel>
                <FormControl>
                  <Input {...field} className="form-input" />
                </FormControl>
                <FormMessage className="form-msg" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="form-label">Email</FormLabel>
                <FormControl>
                  <Input {...field} className="form-input" />
                </FormControl>
                <FormMessage className="form-msg" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Message</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} className="form-input" />
              </FormControl>
              <FormMessage className="form-msg" />
            </FormItem>
          )}
        />
        <Button disabled={loading} className="btn uppercase w-full">
          {loading ? <ImSpinner9 className="animate-spin" /> : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
