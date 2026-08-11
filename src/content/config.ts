import { defineCollection, z } from 'astro:content';

// 定义 "blog" 集合的模式
const blog = defineCollection({
  type: 'content', // 指定这是基于文件的内容集合（支持 .md, .mdx）
  schema: z.object({
    // 1. 标题 (必填)
    title: z.string(),

    // 2. 摘要 (必填)
    description: z.string(),

    // 3. 发布时间 (必填，自动校验日期格式)
    pubDate: z.coerce.date(),

    // 4. 更新时间 (选填)
    updatedDate: z.coerce.date().optional(),

    // 5. 封面图片 (选填，指向 src/assets 或 public 中的图片路径)
    heroImage: z.string().optional(),

    // 6. 标签 (必填，必须是一个字符串数组，如 ['前端', '教程'])
    tags: z.array(z.string()),

    // 7. 阅读时长 (选填，数字类型，单位：分钟)
    readingTime: z.number().optional(),
  }),
});

// 导出所有集合
export const collections = { blog };