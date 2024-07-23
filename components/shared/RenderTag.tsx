import Link from "next/link";
import { Badge } from "../ui/badge";

interface Props {
  _id: number;
  name: string;
  totalQuestions?: string;
  showCount?: boolean;
}

export default function RenderTag({
  _id,
  name,
  totalQuestions,
  showCount,
}: Props) {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>

      {showCount && (
        <p className="samll-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
}