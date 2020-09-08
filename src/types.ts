export interface IOmiseConfig {
  publicKey: string;
  apiVersion: string;
}

interface ICardOption {
  name: string;
  city: string;
  postal_code: number;
  number: string;
  expiration_month: number;
  expiration_year: number;
  security_code: number;
}

interface IOmiseCard {
  object: "card";
  id: "card_test_no1t4tnemucod0e51mo";
  livemode: false;
  location: null;
  deleted: false;
  street1: "1448/4 Praditmanutham Road";
  street2: null;
  city: "Bangkok";
  state: null;
  phone_number: "0123456789";
  postal_code: "10320";
  country: "th";
  financing: "credit";
  bank: "Bank of the Unbanked";
  brand: "Visa";
  fingerprint: "XjOdjaoHRvUGRfmZacMPcJtm0U3SEIIfkA7534dQeVw=";
  first_digits: null;
  last_digits: "4242";
  name: "Somchai Prasert";
  expiration_month: 12;
  expiration_year: 2022;
  security_code_check: true;
  created_at: "2019-12-31T12:59:59Z";
}

interface IOmiseResponse {
  object: string;
  id: string;
  livemode: boolean;
  location: string;
  used: false;
  charge_status: string;
  card: IOmiseCard;
  created_at: Date;
}

export interface IOmise {
  createToken: (cardData: ICardOption) => Promise<IOmiseResponse>;
}
