import React, { useState } from "react";

const PersonCrud = () => {
  const [persons, setPersons] = useState([]);
  const [formData, setFormData] = useState({ nom: "", prenom: "", age: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      // Update an existing person
      const updatedPersons = persons.map((person, index) =>
        index === editIndex ? formData : person
      );
      setPersons(updatedPersons);
      setEditIndex(null);
    } else {
      // Add a new person
      setPersons([...persons, formData]);
    }
    setFormData({ nom: "", prenom: "", age: "" });
  };

  const handleEdit = (index) => {
    setFormData(persons[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredPersons = persons.filter((_, i) => i !== index);
    setPersons(filteredPersons);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestion des Personnes</h1>
      <div>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Âge"
          value={formData.age}
          onChange={handleChange}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Modifier" : "Ajouter"}
        </button>
      </div>
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Âge</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <tr key={index}>
              <td>{person.nom}</td>
              <td>{person.prenom}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Modifier</button>
                <button onClick={() => handleDelete(index)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonCrud;
