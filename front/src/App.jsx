import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbzbued9h8DRnHEDKI1N71PQZAxxUAcQN5fN2dyfZw4HBRh_UoD5ugHCjYK9aFZmo9yxLQ/exec";

    const data = {
      nome,
      presenca,
    };

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      alert("Confirmação enviada!");
      setNome("");
      setPresenca("");

    } catch (err) {
      alert("Erro ao enviar.");
      console.error(err);
    }
  };


  return (
    <>
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body, #root {
          height: 100%;
          width: 100%;
          display: flex;
        }

        body {
          background: linear-gradient(180deg, #FFF8E1, #FDE9A9);
          font-family: Arial, sans-serif;
        }

       option[disabled][value=""] {
          color: #8a6d3b !important;
          opacity: 0.7;
        }

        /* Quando uma opção válida é selecionada */
        select {
          color: #5A3E1B; /* marrom girassol */
        }
      `}
      </style>

      <div
        style={{
          flex: 1,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            padding: "36px 28px",
            borderRadius: 20,
            maxWidth: 420,
            width: "92%",
            textAlign: "center",

            border: "5px solid #FBD405",

            boxShadow: "0 8px 22px rgba(251, 212, 5, 0.35)",
          }}
        >
          <h2
            style={{
              fontSize: 24,
              marginBottom: 10,
              fontWeight: "bold",
              color: "#5A3E1B",
            }}
          >
            Confirmação de Presença 🌻
          </h2>

          <label
            htmlFor="nome"
            style={{
              display: "block",
              marginBottom: 6,
              fontWeight: 700,
              color: "#5A3E1B",
              textAlign: "left",
            }}
          >
            Nome
          </label>

          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 10,
              border: "2px solid #FBD405",
              marginBottom: 18,
              fontSize: 16,
              background: "#FFF8E1",
              color: "#5A3E1B",
            }}
          />

          <label
            htmlFor="presenca"
            style={{
              display: "block",
              marginBottom: 6,
              fontWeight: 700,
              color: "#5A3E1B",
              textAlign: "left",
            }}
          >
            Confirma presença?
          </label>

          <select
            id="presenca"
            value={presenca}
            onChange={(e) => setPresenca(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 10,
              border: "2px solid #FBD405",
              marginBottom: 18,
              fontSize: 16,
              background: "#FFF8E1",
            }}
          >
            <option value="" disabled style={{ color: "#5A3E1B" }}>Você confirma presença?</option>
            <option value="Sim" style={{ color: "#5A3E1B" }}>Sim 🌻</option>
            <option value="Não" style={{ color: "#5A3E1B" }}>Não 😢</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: 12,
              fontSize: 18,
              fontWeight: 800,
              borderRadius: 10,
              border: "none",
              color: "#5A3E1B",
              cursor: "pointer",

              background: "linear-gradient(90deg, #FBD405, #E8B400)",
              boxShadow: "0 6px 14px rgba(251, 212, 5, 0.35)",
            }}
          >
            Enviar 🌻
          </button>
        </form>
      </div>
    </>
  );
}
