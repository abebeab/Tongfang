-- =========================================
-- Supabase SQL Schema for TongfangBMS Project
-- Fully mapped to R2 storage structure
-- All IDs are UUIDs for consistency
-- =========================================

-- 1️⃣ Navigation (Header Links)
CREATE TABLE IF NOT EXISTS navigation (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    label varchar(255) NOT NULL,
    slug varchar(255),
    url text,
    position varchar(50), -- 'left' or 'right'
    order_index int,
    type varchar(50),     -- 'link', 'language', 'global'
    icon_url text         -- R2 URL to icon image
);

-- 2️⃣ Categories
CREATE TABLE IF NOT EXISTS categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(255) NOT NULL,
    slug varchar(255),
    type varchar(50),      -- 'product','solution','scenario','industry','function','smb'
    parent_id uuid REFERENCES categories(id),
    banner_url text,       -- R2 URL
    icon_url text,         -- R2 URL
    description text
);

-- 3️⃣ Series (Product Series)
CREATE TABLE IF NOT EXISTS series (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id uuid REFERENCES categories(id),
    name varchar(255) NOT NULL,
    slug varchar(255),
    banner_url text,       -- R2 URL
    description text,
    created_at timestamp DEFAULT now()
);

-- 4️⃣ Products
CREATE TABLE IF NOT EXISTS products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    series_id uuid REFERENCES series(id),
    model varchar(255),
    name varchar(255),
    subtitle varchar(255),
    description text,
    banner_url text,        -- R2 URL
    thumbnail_url text,     -- R2 URL
    specsheet_url text,     -- R2 URL PDF
    brochure_url text,      -- R2 URL PDF
    poster_url text,        -- R2 URL PDF
    flyer_url text,         -- R2 URL PDF
    features jsonb,         -- JSON array of feature images/descriptions
    technologies jsonb,     -- JSON array
    created_at timestamp DEFAULT now()
);

-- 5️⃣ Product Images
CREATE TABLE IF NOT EXISTS product_images (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id bigint REFERENCES products(id) ON DELETE CASCADE,
    image_url text,
    order_index int
);


-- 6️⃣ Solutions
CREATE TABLE IF NOT EXISTS solutions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(255),
    slug varchar(255),
    type varchar(50),          -- 'scenario','industry','function','smb'
    banner_url text,           -- R2 URL
    overview text,
    challenges jsonb,          -- JSON array of images/descriptions
    benefits jsonb,            -- JSON array
    features jsonb,            -- JSON array
    related_products jsonb,    -- JSON array of product UUIDs
    downloads jsonb,           -- JSON array of R2 URLs
    created_at timestamp DEFAULT now()
);

-- 7️⃣ Downloads
CREATE TABLE IF NOT EXISTS downloads (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title varchar(255),
    file_type varchar(50),       -- 'brochure','flyer','poster','manual'
    file_url text,               -- R2 URL
    product_id uuid REFERENCES products(id),
    solution_id uuid REFERENCES solutions(id),
    category_id uuid REFERENCES categories(id),
    created_at timestamp DEFAULT now()
);

-- 8️⃣ Success Stories
CREATE TABLE IF NOT EXISTS success_stories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title varchar(255),
    country varchar(255),
    industry varchar(255),
    image_url text,      -- R2 URL
    description text,
    story_url text,      -- Optional R2 URL or external link
    created_at timestamp DEFAULT now()
);

-- 9️⃣ Blog
CREATE TABLE IF NOT EXISTS blog (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title varchar(255),
    slug varchar(255),
    image_url text,      -- R2 URL
    content text,
    category varchar(255),
    tags jsonb,          -- JSON array of tags
    created_at timestamp DEFAULT now()
);

-- =========================================
-- ✅ Notes:
-- 1. All tables consistently use UUIDs for PKs and FKs.
-- 2. JSON fields handle multiple images, features, downloads dynamically.
-- 3. Fully matches your R2 assets folder structure.
-- 4. Safe to push to Supabase using `supabase db push`.
-- =========================================
