import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import pt from "date-fns/locale/pt"
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react"
import Mask from "../../utils/Mask"
import { getMonth, getYear } from "date-fns"

function range(size: any, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt)
}

export default function DatePickerComponent(props: any) {
  const [date, setDate] = useState(new Date())
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const years = range(getYear(new Date()) + 1, 1900)

  const handleChange = (date: Date) => {
    setDate(date)
    props.onChange(props.name, date)
  }

  const handleInputChange = (date: string) => {
    const maskedDate = Mask.TO_BR_DATE(date)

    setDate(new Date(maskedDate))

    props.onChange(props.name, maskedDate)
  }

  return (
    <FormControl
      {...(props.id && { id: props.id })}
      {...(props.sxFormControl && { sx: props.sxFormControl })}
    >
      <FormLabel margin={"0px"}>{props.label}</FormLabel>
      <DatePicker
        selected={date}
        onSelect={handleChange}
        onChange={handleChange}
        locale={pt}
        dateFormat="dd/MM/yyyy"
        customInput={
          <Input
            onChange={({ target: { value } }) => handleInputChange(value)}
          />
        }
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            <button
              style={{ margin: 4 }}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <Select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
              size={"xs"}
              maxWidth={"70px"}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
              size={"xs"}
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <button
              style={{ margin: 4 }}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {">"}
            </button>
          </div>
        )}
      />
    </FormControl>
  )
}
