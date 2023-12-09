import moment from "moment";

const formatCurrency = (value: string) => {
  if (typeof value === "string") {
    if (/[^0-9.,]/.test(value)) {
      // Se houver caracteres que não sejam dígitos na string, retorne null ou lance uma exceção
      return "";
    }
    value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(parseFloat(value) / 100);
    return result;
  } else if (typeof value === "number") {
    return "R$ " + (value as number).toFixed(2).replace(".", ",");
  } else {
    return value;
  }
};

const CNPJ = (value: string) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");

  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 5) {
    return onlyNums.slice(0, 2) + "." + onlyNums.slice(2);
  }
  if (onlyNums.length <= 8) {
    return onlyNums.slice(0, 2) + "." + onlyNums.slice(2, 5) + "." + onlyNums.slice(5);
  }
  if (onlyNums.length <= 12) {
    return onlyNums.slice(0, 2) + "." + onlyNums.slice(2, 5) + "." + onlyNums.slice(5, 8) + "/" + onlyNums.slice(8);
  }
  return onlyNums.slice(0, 2) + "." + onlyNums.slice(2, 5) + "." + onlyNums.slice(5, 8) + "/" + onlyNums.slice(8, 12) + "-" + onlyNums.slice(12, 14);
};

const PhoneNumber = (value: string) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  
  if (onlyNums.length <= 2) {
    return "(" + onlyNums;
  }
  if (onlyNums.length <= 7) {
    return "(" + onlyNums.slice(0, 2) + ") " + onlyNums.slice(2);
  }
  if (onlyNums.length <= 11) {
    return "(" + onlyNums.slice(0, 2) + ") " + onlyNums.slice(2, 7) + "-" + onlyNums.slice(7);
  }
  return "(" + onlyNums.slice(0, 2) + ") " + onlyNums.slice(2, 7) + "-" + onlyNums.slice(7, 11);
};

const CPF = (value: string) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return onlyNums.slice(0, 3) + "." + onlyNums.slice(3);
  }
  if (onlyNums.length <= 9) {
    return onlyNums.slice(0, 3) + "." + onlyNums.slice(3, 6) + "." + onlyNums.slice(6);
  }
  return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}-${onlyNums.slice(9, 11)}`;
};

const CEP = (value: string) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  
  if (onlyNums.length <= 3) {
    return onlyNums;
  }

  if (onlyNums.length <= 5) {
    return onlyNums.slice(0,2) + "." + onlyNums.slice(2);
  }

  return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}-${onlyNums.slice(5)}`;
};

const TO_DATABASE = (value: any) => {
  return value ? moment(value, ["DD/MM/YYYY", "YYYY-MM-DD HH:mm:ss"]).format("YYYY-MM-DD HH:mm:ss") : value;
};

const TO_DATABASE_DATE = (value: any) => {
  return value ? moment(value, ["DD/MM/YYYY", "YYYY-MM-DD HH:mm:ss"]).format("YYYY-MM-DD") : value;
};

const TO_BR = (values: string) => {
  if (!values) return values;

  const onlyNums = values.replace(/[^\d]/g, "");

  if (onlyNums.length <= 2) return onlyNums;
  else if (onlyNums.length <= 4) return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  else if (onlyNums.length <= 8) return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`;
  else {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`;
  }
};

const TO_BR_DATE = (value: any) => {
  return value ? moment(value).format("DD/MM/YYYY") : value;
};

const TO_BR_DATETIME = (value: any) => {
  return value ? moment(value).format("DD/MM/YYYY HH:mm:ss") : value;
};

const TO_YYYY_MM_DD = (value: any) => {
  return value ? moment(value, ["DD/MM/YYYY", "YYYY-MM-DD HH:mm:ss"]).format("YYYY-MM-DD") : value;
};

const TO_MONTH_YEAR = (value: any) => {
  return value ? moment(value, ["YYYYMM", "YYYY-MM"]).locale("pt-br").format("MMM/YYYY") : value;
};

const TO_LAST_DAY = (value: any) => {
  return value ? moment(value, ["YYYYMM", "YYYY-MM"]).endOf("month").format("YYYY-MM-DD") : value;
};

const TO_MONTH = (value: any) => {
  return value ? moment(value, ["YYYYMM", "YYYY-MM"]).locale("pt-br").format("MMMM") : value;
};

const TO_BRL = (value: string) => {
  return value ? parseFloat(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : value;
};

export default {
  formatCurrency,
  CPF,
  CNPJ,
  CEP,
  PhoneNumber,
  TO_DATABASE,
  TO_BR,
  TO_BR_DATE,
  TO_BR_DATETIME,
  TO_DATABASE_DATE,
  TO_MONTH_YEAR,
  TO_LAST_DAY,
  TO_MONTH,
  TO_YYYY_MM_DD,
  TO_BRL,
};