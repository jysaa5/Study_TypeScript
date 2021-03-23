interface PhoneNumberDictionary {
  [phone: string]: {
    // 어떤 키 값이 오던 상관 없음. {키 : 벨류}의 배열
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

export { Contact, PhoneType };
