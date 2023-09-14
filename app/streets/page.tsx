"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import { createUrl } from "../../utils/url"
import { StreetDto } from "../../dto/street.dto"


interface Street {
  _id: string;
  name: string;
}

function StreetsDropdown() {
  const [streets, setStreets] = useState<Street[]>([]);
  const [selectedStreet, setSelectedStreet] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    fetch('/api/streets')
      .then((response) => response.json())
      .then((data: Street[]) => setStreets(data))
      .catch((error) => console.error("Error fetching streets:", error));
  }, []);


  const handleStreetChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStreet(e.target.value);
    setShowMessage(true);
  }

  return (
    <div>
      <label>Gatvė: 
        <select value={selectedStreet} onChange={handleStreetChange}>
          <option value="">-- Pasirinkite gatvę --</option>
          {streets.map((street) => (
            <option key={street._id} value={street.name}>{street.name}</option>
          ))}
        </select>
      </label>
      {showMessage && selectedStreet && (
        <div>
          Kokiam miestui norite priskirti {selectedStreet}?
        </div>
      )}
    </div>
  );
}

export default StreetsDropdown;
