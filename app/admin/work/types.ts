export type WorkVideo = {
  id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  category: string | null;
  is_pinned: boolean;
  display_order: number;
  created_at: string;
};

export type WorkVideoInput = {
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  category: string | null;
  is_pinned: boolean;
  display_order: number;
};
