import { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export default function DatePicker(props: any) {
  const [date, setDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setDate(date);
    props.onChange(props.name, date);
  };

  return (
    <SingleDatepicker
      date={date}
      onDateChange={handleChange}
      configs={{
        dateFormat: "DD-MM-YYYY",
        locale: "pt-br",
      }}
      {...props}
    />
  );
}