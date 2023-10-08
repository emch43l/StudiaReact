export type User = {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: Address;
  phone: String;
  website: String;
  company: Company;
};

export type Company = {
  name: String;
  catchPhrase: String;
  bs: String;
};

export type Address = {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
  geo: Geo;
};

export type Geo = {
  lat: number;
  lng: number;
};
