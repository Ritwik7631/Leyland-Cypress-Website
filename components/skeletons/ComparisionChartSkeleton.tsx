import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function ComparisionChartSkeleton() {
  console.log("rendering skeleon");
  return (
    <div className="flex container flex-col lg:flex-row gap-10 justify-between">
      <Card className="container p-5">
        <div className="w-full">
          <div className="flex items-center gap-5">
            <Skeleton className="h-12 w-1/2"></Skeleton>
            <Skeleton className="h-12 w-1/2 delay-100"></Skeleton>
          </div>
          <div className="my-4">
            <Skeleton className="h-5 w-1/4 my-4"></Skeleton>
            <Skeleton className="h-4 w-1/5 my-4"></Skeleton>
          </div>
          <Skeleton className="h-[21.875rem] w-full"></Skeleton>
        </div>
        <Skeleton className="h-16 my-5"></Skeleton>

      </Card>
    </div>
  );
}
