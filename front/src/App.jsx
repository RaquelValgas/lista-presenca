import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
    } finally {
      setLoading(false);
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

        select {
          color: #5A3E1B; /* marrom girassol */
        }
        
        ::placeholder {
          color: #5A3E1B;
          opacity: 1; /* garante que a cor não fique transparente */
        } 

        .spinner {
          border: 3px solid #f3f3f3; /* fundo do spinner */
          border-top: 3px solid #5A3E1B; /* cor do topo */
          border-radius: 50%;
          width: 18px;
          height: 18px;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-left: 8px;
          vertical-align: middle;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .lembrete {
          background: #FFF3CD;
          color: #856404;
          border: 2px solid #FFEeba;
          border-radius: 10px;
          padding: 12px 16px;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: center;
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
          <div className="lembrete">
            Se for consumir bebida alcoólica, por favor leve a sua!
          </div>

          <h2
            style={{
              fontSize: 24,
              marginBottom: 10,
              fontWeight: "bold",
              color: "#5A3E1B",
            }}
          >
            Confirmação de Presença
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
            <option value="Sim" style={{ color: "#5A3E1B" }}>Sim</option>
            <option value="Não" style={{ color: "#5A3E1B" }}>Não</option>
          </select>

          <button
            type="submit"
            disabled={loading}
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
            {loading ? (
              <>
                Enviando
                {" "}
                <span className="spinner"></span>
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
