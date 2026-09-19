output "status_infraestrutura" {
  description = "Resumo executivo do provisionamento no LocalStack"
  value       = "Bucket '${aws_s3_bucket.app_storage.bucket}' criado com sucesso no LocalStack e pronto para receber logs e artefatos."
}

output "seguranca_devsecops" {
  description = "Status das políticas de segurança aplicadas"
  value       = "Políticas aplicadas: Criptografia AES-256 ativa, versionamento habilitado e acesso público bloqueado."
}

output "endpoint_local" {
  description = "Como acessar o bucket localmente"
  value       = "http://localhost:4566/${aws_s3_bucket.app_storage.bucket}"
}