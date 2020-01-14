export interface GurunaviResponse {
  "@attributes": Attributes;
  total_hit_count: number;
  hit_per_page: number;
  page_offset: number;
  rest: Rest[];
}

export interface Rest {
  "@attributes": Attributes2;
  id: string;
  update_date: string;
  name: string;
  name_kana: string;
  latitude: string;
  longitude: string;
  category: string;
  url: string;
  url_mobile: string;
  coupon_url: Couponurl;
  image_url: Imageurl;
  address: string;
  tel: string;
  tel_sub: string;
  fax: string;
  opentime: string;
  holiday: string;
  access: Access;
  parking_lots: string;
  pr: Pr;
  code: Code;
  budget: number;
  party: string;
  lunch: number;
  credit_card: string;
  e_money: string;
  flags: Flags;
}

export interface Flags {
  mobile_site: number;
  mobile_coupon: number;
  pc_coupon: number;
}

export interface Code {
  areacode: string;
  areaname: string;
  prefcode: string;
  prefname: string;
  areacode_s: string;
  areaname_s: string;
  category_code_l: string[];
  category_name_l: string[];
  category_code_s: string[];
  category_name_s: string[];
}

export interface Pr {
  pr_short: string;
  pr_long: string;
}

export interface Access {
  line: string;
  station: string;
  station_exit: string;
  walk: string;
  note: string;
}

export interface Imageurl {
  shop_image1: string;
  shop_image2: string;
  qrcode: string;
}

export interface Couponurl {
  pc: string;
  mobile: string;
}

export interface Attributes2 {
  order: number;
}

export interface Attributes {
  api_version: string;
}
