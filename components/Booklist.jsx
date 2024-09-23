// src/components/Booklist.jsx
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Checkbox, Button } from "@nextui-org/react";
import data from "./Subjects";

export default function Booklist() {
  const [activeTab, setActiveTab] = useState("1ST-SEM");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState({});

  useEffect(() => {
    const selectedSem = data.CME.find((item) => item.sem === activeTab);
    setSubjects(selectedSem ? selectedSem.subjects : []);
    setSelectedSubjects((prevSelected) => ({
      ...prevSelected,
      [activeTab]: prevSelected[activeTab] || {},
    }));
  }, [activeTab]);

  const handleChange = (key) => {
    setActiveTab(key);
  };

  const handleCheckboxChange = (code) => {
    setSelectedSubjects((prevSelected) => {
      const updatedSelection = { ...prevSelected[activeTab] };
      updatedSelection[code] = !updatedSelection[code];
      return {
        ...prevSelected,
        [activeTab]: updatedSelection,
      };
    });
  };

  const handleAddToCart = () => {
    console.log("Selected Subjects for " + activeTab + ":", selectedSubjects[activeTab]);
  };

  return (
    <div className="Booklist flex flex-col items-center justify-center min-h-screen p-4">
      <Tabs
        color="primary"
        aria-label="Tabs colors"
        radius="full"
        onSelectionChange={handleChange}
        selectedKey={activeTab}
        className="responsive-tabs"
        style={{ marginBottom: "1rem" }}
      >
        <Tab key="1ST-SEM" title="1ST-SEM" />
        <Tab key="3RD-SEM" title="3RD-SEM" />
        <Tab key="4TH-SEM" title="4TH-SEM" />
        <Tab key="5TH-SEM" title="5TH-SEM" />
      </Tabs>

      <div className="table-container w-full max-w-md">
        <Table removeWrapper aria-label="Subjects Table" css={{ width: "100%", margin: "0 auto" }}>
          <TableHeader>
            <TableColumn style={{ width: "80px" }} className="text-sm md:text-base">Subject Code</TableColumn>
            <TableColumn style={{ width: "auto" }} className="text-sm md:text-base">Subjects</TableColumn>
            <TableColumn style={{ width: "auto" }} className="text-sm md:text-base">Select Subjects</TableColumn>
          </TableHeader>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.code}>
                <TableCell style={{ width: "80px" }} className="text-sm md:text-base">{subject.code}</TableCell>
                <TableCell style={{ width: "auto" }} className="text-sm md:text-base">{subject.name}</TableCell>
                <TableCell style={{ width: "auto" }}>
                  <Checkbox
                    isSelected={!!selectedSubjects[activeTab]?.[subject.code]}
                    onChange={() => handleCheckboxChange(subject.code)}
                    className="text-sm md:text-base"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-center mt-4">
          <Button className="text-sm md:text-base" color="primary" onClick={handleAddToCart}>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}
