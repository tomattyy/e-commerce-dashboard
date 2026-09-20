output "status_backend_infra" {
  description = "Status do armazenamento da API Node.js"

  value = "Bucket privado '${aws_s3_bucket.backend_storage.bucket}' provisionado com AES-256 e acesso público bloqueado."
}

output "status_frontend_infra" {
  description = "Status da hospedagem do Dashboard React"

  value = "Bucket estático '${aws_s3_bucket.frontend_hosting.bucket}' configurado para hospedar o build do React."
}

output "url_frontend_dashboard" {
  description = "URL para acessar o frontend no LocalStack"

  value = "http://${aws_s3_bucket.frontend_hosting.bucket}.s3-website.localhost.localstack.cloud:4566/"
}