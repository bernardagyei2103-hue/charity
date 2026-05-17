"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type Story = {
  title: string;
  beforeAfter: string;
  href: string;
  image: string;
  imageAlt: string;
};

export function StoryCard({ story, className }: { story: Story; className?: string }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[32px] bg-white shadow-card ring-1 ring-hope/10",
        className,
      )}
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 38vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/35 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
            Featured story
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-hope-deep">
          {story.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-hope-muted">{story.beforeAfter}</p>
        <div className="mt-auto pt-8">
          <Button asChild variant="outline" className="w-full rounded-2xl">
            <Link href={story.href}>Read more</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
