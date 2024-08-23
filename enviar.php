<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pega os valores do formulário
    $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $celular = filter_var($_POST['celular'], FILTER_SANITIZE_STRING);
    $mensagem = filter_var($_POST['mensagem'], FILTER_SANITIZE_STRING);

    // Configurações do e-mail
    $to = "seuemail@dominio.com"; // Coloque seu e-mail aqui
    $subject = "Novo contato de $nome";
    $body = "Nome: $nome\n";
    $body .= "E-mail: $email\n";
    $body .= "Celular: $celular\n\n";
    $body .= "Mensagem:\n$mensagem\n";
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviagggr a mensagem. Tente novamente mais tarde.";
    }
}
?>
