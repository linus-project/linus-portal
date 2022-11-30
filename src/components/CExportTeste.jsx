import Swal from "sweetalert2";
import Button from "@mui/material/Button/Button";
import api from "../api";

export function ExportTeste() {

  async function selection() {
    const { value: size } = await Swal.fire({
      title: "Exportar",
      html: `
        <label>Selecione Distribuição</a>
        <br> 
        <br>
        <select id="select_distro" name="viagem" style="padding:8px 90px 8px 90px" >
            <option value="0">Selecione</option>
            <option value="1">Ubuntu</option>
            <option value="2">Fedora</option>
            <option value="3">Suse</option>
            <option value="4">Minte</option>
            <option value="5">Redhat</option>
        </select>`,
      input: "range",
      inputValue: 0,
      inputLabel: "Quantidade de Conteúdo",
      inputAttributes: {
        min: 1,
        max: 20,
        step: 1,
      },
    });
    exportFile(size);
  }

  async function exportFile(size) {
    var result = await api.get(`/content/export/csv?fileTitle=test&contentTitle=ubuntu&listSize=${size}`);
    const element = document.createElement("a");
    const file = new Blob([result.data], {type: 'application/csv'});
    element.href = URL.createObjectURL(file);
    element.download = "linus-export.csv";
    element.click();
  }

  return (
    <>
      <Button
        style={{
          width: 150,
          backgroundColor: "#9400D3",
          color: "white",
          borderRadius: 10,
          textTransform: "capitalize",
        }}
        onClick={() => selection()}
      >
        Selecionar
      </Button>
    </>
  );
}
