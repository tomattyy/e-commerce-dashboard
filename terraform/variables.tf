variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Região simulada da AWS"
}

variable "localstack_endpoint" {
  type        = string
  default     = "http://localhost:4566"
  description = "Endpoint de comunicação com o LocalStack"
}

variable "backend_bucket_name" {
  type        = string
  default     = "startup-api-artifacts-bucket"
  description = "Bucket S3 para logs e artefatos da API"
}

variable "frontend_bucket_name" {
  type        = string
  default     = "startup-frontend-dashboard-bucket"
  description = "Bucket S3 para hospedagem do frontend estático (React)"
}

variable "environment" {
  description = "Ambiente de deploy (dev, staging, production)"
  type        = string
  default     = "dev"
}