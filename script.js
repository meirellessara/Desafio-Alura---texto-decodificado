document.addEventListener('DOMContentLoaded', function () {
    const inputTextoCripto = document.getElementById("textoCripto");
    const inputResultadoCripto = document.getElementById("resultadoCripto");
    const imgNaoEncontrado = document.getElementById("imgNaoEncontrado");
    const text__codificado = document.getElementById("text__codificado");
    const btnCripto = document.getElementById("btnCripto");
    const btnDescripto = document.getElementById("btnDescripto");
    const btnCopiar = document.getElementById("btnCopiar");
    const btnLimpar = document.getElementById("btnLimpar");
  
    function btCripto() {
        if (inputTextoCripto) {
            const textoOriginal = inputTextoCripto.value;
            if (/[^a-z\s]/.test(textoOriginal)) {
                alert("O texto não pode conter letras maiúsculas, caracteres especiais ou números.");
                inputTextoCripto.value = "";
                return;
            }
            let novoTexto = textoOriginal.replace(/[aeiou]/g, function (vogal) {
                switch (vogal) {
                    case "a": return "ai";
                    case "e": return "enter";
                    case "i": return "imes";
                    case "o": return "ober";
                    case "u": return "ufat";
                }
            });

            if (novoTexto.trim() !== "") {
                inputResultadoCripto.style.display = "block";
                inputResultadoCripto.value = novoTexto;
                imgNaoEncontrado.style.display = "none";
                text__codificado.style.display = "none";
                btnCopiar.style.display = "block";
            } else {
                inputResultadoCripto.value = ""; 
                imgNaoEncontrado.style.display = "block"; 
                text__codificado.style.display = "none";
                btnCopiar.style.display = "none"; 
            }
        } else {
            console.error("Elemento com ID 'textoCripto' não encontrado.");
        }
    }
    
    function btDescipto() {
        const textoCriptografado = inputResultadoCripto.value;

        if (textoCriptografado.trim() !== "") {
            const textoDescriptografado = textoCriptografado.replace(/ai|enter|imes|ober|ufat/g, function(match) {
                switch (match) {
                    case "ai": return "a";
                    case "enter": return "e";
                    case "imes": return "i";
                    case "ober": return "o";
                    case "ufat": return "u";
                }
            });
            inputResultadoCripto.value = textoDescriptografado;
            imgNaoEncontrado.style.display = "none";
            text__codificado.style.display = "none";
            btnCopiar.style.display = "block";
        } else {
            inputResultadoCripto.value = ""; 
            imgNaoEncontrado.style.display = "block"; 
            text__codificado.style.display = "none";
            btnCopiar.style.display = "none"; 
        }
    }

    document.getElementById('btnLimpar').addEventListener('click', function() {
        document.getElementById('textoCripto').value = '';
        document.getElementById('resultadoCripto').style.display = 'none';
        document.getElementById('text__codificado').style.display = 'block';
        document.getElementById('btnCopiar').style.display = 'none';
    });

    function copiarTexto() {
        const texto = inputResultadoCripto.value;
        navigator.clipboard.writeText(texto).then(function() {
            alert('Texto copiado para a área de transferência!');
        }).catch(function(err) {
            console.error('Erro ao copiar texto:', err);
        });
    }

    btnCripto.addEventListener('click', btCripto);
    btnDescripto.addEventListener('click', btDescipto);
    btnCopiar.addEventListener('click', copiarTexto);
});
