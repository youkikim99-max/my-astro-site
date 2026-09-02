import { defineCollection, z } from 'astro:content';

// 定义 "blog" 集合的模式
const blog = defineCollection({
  type: 'content',
  // ✅ 关键修改：将 schema 转换为函数，并接收 Astro 内置的 image 辅助函数
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
    // ✅ 使用传入的 image() 验证器来处理社交分享图
    image: image().optional(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
  }),
});

// 导出所有集合
export const collections = { blog };