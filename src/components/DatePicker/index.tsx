import { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { FormControl, FormLabel } from "@chakra-ui/react";

export default function DatePicker(props: any) {
  const [date, setDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setDate(date);
    props.onChange(props.name, date);
  };

  return (
    <FormControl
      {...(props.id && { id: props.id })}
      {...(props.sxFormControl && { sx: props.sxFormControl })}
    >
      <FormLabel margin={"0px"}>{props.label}</FormLabel>
      <SingleDatepicker
        date={date}
        onDateChange={handleChange}
        configs={{
          dateFormat: "dd-MM-yyyy",
          locale: "pt-br",
          dayNames: [
            'Dom', 
            'Seg', 
            'Ter', 
            'Qua',
            'Qui',
            'Sex',
            'Sab'
          ],
          monthNames: [
            'Janeiro', 
            'Fevereiro', 
            'Março', 
            'Abril', 
            'Maio', 
            'Junho', 
            'Julho', 
            'Agosto', 
            'Setembro', 
            'Outubro', 
            'Novembro', 
            'Dezembro',
          ],
        }}
        propsConfigs={{
          popoverCompProps: {
            popoverContentProps: {
              background: "#F6F6F3",
              color: "#454545",
              borderRadius: "12px",
              padding: "0px",
            },
            popoverBodyProps: {
              padding: "0px",
            },
          },
          calendarPanelProps: {
            contentProps: {
              borderWidth: 0,
            },
          },
        }}
        {...props}
      />
    </FormControl>
  );
}