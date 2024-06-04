import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
export enum City {
    ALL = "all",
    ARIANA = "ariana",
    BEJA = "beja",
    BEN_AROUS = "ben arous",
    BIZERTE = "bizerte",
    GABES = "gabes",
    GAFSA = "gafsa",
    JENDOUBA = "jendouba",
    KAIROUAN = "kairouan",
    KASSERINE = "kasserine",
    KEBILI = "kebili",
    KEF = "kef",
    MAHDIA = "mahdia",
    MANOUBA = "manouba",
    MEDENINE = "medenine",
    MONASTIR = "monastir",
    NABEUL = "nabeul",
    SFAX = "sfax",
    SIDI_BOUZID = "sidi bouzid",
    SILIANA = "siliana",
    SOUSSE = "sousse",
    TATAOUINE = "tataouine",
    TOZEUR = "tozeur",
    TUNIS = "tunis",
    ZAGHOUAN = "zaghouan",
  }
  
const LocationSelect = ({ value, onChange } : any) => {
  const handleInputChange = (value : string) => {
    onChange(value);
  };

  return (
    <Select value={value} onValueChange={handleInputChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cities</SelectLabel>
          {Object.values(City).map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LocationSelect;
