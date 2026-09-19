variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Região da AWS simulada"
}

variable "localstack_endpoint" {
  type        = string
  default     = "http://localhost:4566"
  description = "Endpoint da API do LocalStack"
}

variable "bucket_name" {
  type        = string
  default     = "startup-api-artifacts-bucket"
  description = "Nome do bucket S3 para logs e artefatos da API"
}