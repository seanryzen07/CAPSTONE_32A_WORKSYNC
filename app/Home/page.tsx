import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "recharts/types/chart/BarChart";
import { Bar } from "recharts/types/cartesian/Bar";
import Link from "next/link";
import App from "next/app";
import AppBarChart from "@/components/ui/AppBarChart";
import { TableFooterExample } from "@/components/tablesam";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button as CardButton} from "@/components/ui/CardButton";
export default function DashboardPage() {
  
  return (
    <div className="w-full  px-6">

        <div className="w-full mb-4">
          <Card className="w-full h-full px-4 py-4">
            <div className="grid grid-cols-2 items-center">
              <p className="text-lg font-medium text-left">Marketplace</p>

              <div className="flex justify-end">
                <Field className="flex items-center">
                  <ButtonGroup className="space-x-2 pr-2">
                    <Input
                      id="input-button-group"
                      placeholder="Type to search..."
                      className="min-w-[35px]" // optional: ensures input has some width
                    />
                    <Button variant="outline">Search</Button>
                    <Button variant="outline">Create</Button>
                  </ButtonGroup>
                </Field>
              </div>
            </div>
          </Card>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-4 mt-6 mb-6">
          <CardButton className="">
            <Link href="/Home/Project" className="w-full text-left">
          <div className=" w-full text-left lg:col-span-3 xl:col-span-1">
            <Card >
              <CardHeader>
                <CardTitle className="text-xl">Projects</CardTitle>
              </CardHeader>
              <CardContent className="text-lg">25</CardContent>
            </Card>
          </div></Link>
          </CardButton>
     

        <div className="lg:col-span-3 xl:col-span-1">
          <Card >
            <CardHeader>
              <CardTitle className="text-xl">Incoming Deadline</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">10</CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3 xl:col-span-1">
          <Card >
            <CardHeader>
              <CardTitle className="text-xl">Number of Client</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">10</CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3 xl:col-span-1">
          <Card >
            <CardHeader>
              <CardTitle className="text-xl">Finished Projects</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">24,203</CardContent>
          </Card>
        </div>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-4 mt-6 mb-6">
          <div className="lg:col-span-3 xl:col-span-1">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl">Earnings</CardTitle>
              </CardHeader>
              <CardContent >
                <AppBarChart />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 xl:col-span-1">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle className="text-xl">Top Paid Projects</CardTitle>
              </CardHeader>
              <CardContent >
                <TableFooterExample/>
              </CardContent>
            </Card>
          </div>

      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-4 mt-6 mb-6">
        <div className="lg:col-span-3 xl:col-span-1">
          <Card >
            <CardHeader>
              <CardTitle className="text-xl">Projects</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">25</CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 xl:col-span-1">
          <Card >
            <CardHeader>
              <CardTitle className="text-xl">Incoming Deadline</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">10</CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3 xl:col-span-1">
          <Card >
            <CardHeader>
              <CardTitle className="text-xl">Number of Client</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">10</CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3 xl:col-span-1">
          <Card >
            <CardHeader>
              <CardTitle className="text-xl">Finished Projects</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">24,203</CardContent>
          </Card>
        </div>

      </div>

    </div>
  )
}