-- CreateTable
CREATE TABLE "ingest_jobs" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "triggered_by" TEXT NOT NULL,
    "triggered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "started_at" TIMESTAMP(3),
    "finished_at" TIMESTAMP(3),
    "articles_fetched" INTEGER,
    "clusters_generated" INTEGER,
    "error_message" TEXT,

    CONSTRAINT "ingest_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clusters" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "top_terms" JSONB NOT NULL DEFAULT '[]',
    "article_count" INTEGER NOT NULL DEFAULT 0,
    "earliest_article_at" TIMESTAMP(3),
    "latest_article_at" TIMESTAMP(3),
    "ingest_job_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clusters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "cluster_id" TEXT,
    "url" TEXT NOT NULL,
    "url_hash" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "summary" TEXT,
    "body_text" TEXT,
    "source_name" TEXT NOT NULL,
    "source_url" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "fetched_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'viewer',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL,
    "token_hash" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revoked_at" TIMESTAMP(3),

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ingest_jobs_status_idx" ON "ingest_jobs"("status");

-- CreateIndex
CREATE INDEX "clusters_label_idx" ON "clusters"("label");

-- CreateIndex
CREATE INDEX "clusters_latest_article_at_idx" ON "clusters"("latest_article_at" DESC);

-- CreateIndex
CREATE INDEX "clusters_earliest_article_at_idx" ON "clusters"("earliest_article_at");

-- CreateIndex
CREATE INDEX "clusters_ingest_job_id_idx" ON "clusters"("ingest_job_id");

-- CreateIndex
CREATE UNIQUE INDEX "articles_url_key" ON "articles"("url");

-- CreateIndex
CREATE UNIQUE INDEX "articles_url_hash_key" ON "articles"("url_hash");

-- CreateIndex
CREATE INDEX "articles_cluster_id_idx" ON "articles"("cluster_id");

-- CreateIndex
CREATE INDEX "articles_published_at_idx" ON "articles"("published_at" DESC);

-- CreateIndex
CREATE INDEX "articles_source_name_idx" ON "articles"("source_name");

-- CreateIndex
CREATE INDEX "articles_fetched_at_idx" ON "articles"("fetched_at" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_hash_key" ON "refresh_tokens"("token_hash");

-- CreateIndex
CREATE INDEX "refresh_tokens_user_id_idx" ON "refresh_tokens"("user_id");

-- CreateIndex
CREATE INDEX "refresh_tokens_family_idx" ON "refresh_tokens"("family");

-- CreateIndex
CREATE INDEX "refresh_tokens_expires_at_idx" ON "refresh_tokens"("expires_at");

-- AddForeignKey
ALTER TABLE "clusters" ADD CONSTRAINT "clusters_ingest_job_id_fkey" FOREIGN KEY ("ingest_job_id") REFERENCES "ingest_jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_cluster_id_fkey" FOREIGN KEY ("cluster_id") REFERENCES "clusters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
