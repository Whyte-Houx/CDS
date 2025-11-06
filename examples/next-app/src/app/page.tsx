"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import ThemeColorPicker from "@/components/theme-color-picker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 py-12 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full items-center justify-between">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Access Control Demo: grant cookie to open Settings
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() =>
                (document.cookie = `canAccessSettings=true; path=/; max-age=${60 * 60 * 24 * 7}`)
              }
            >
              Grant Settings Access
            </Button>
            <Button
              variant="outline"
              onClick={() => (document.cookie = `canAccessSettings=; path=/; max-age=0`)}
            >
              Revoke
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <ThemeColorPicker />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>shadcn/ui Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-600 dark:text-zinc-400">
              This page demonstrates shadcn/ui components in a fresh Next.js app.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm">Input</label>
                <Input placeholder="Type here" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Textarea</label>
                <Textarea placeholder="Write something..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Select</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Option A</SelectItem>
                    <SelectItem value="b">Option B</SelectItem>
                    <SelectItem value="c">Option C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm">Checkbox</label>
                <div className="flex items-center gap-2">
                  <Checkbox id="cb-1" />
                  <label htmlFor="cb-1" className="text-sm">Accept terms</label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm">Radio Group</label>
                <RadioGroup defaultValue="one" className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="r1" value="one" />
                    <label htmlFor="r1" className="text-sm">One</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="r2" value="two" />
                    <label htmlFor="r2" className="text-sm">Two</label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <label className="text-sm">Switch</label>
                <Switch />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Tooltip</label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>Helpful tip</TooltipContent>
                </Tooltip>
              </div>
              <div className="space-y-2">
                <label className="text-sm">Popover</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56">Popover content goes here.</PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="mt-8 grid gap-6">
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="pt-4">
                  Account tab content.
                </TabsContent>
                <TabsContent value="billing" className="pt-4">
                  Billing tab content.
                </TabsContent>
              </Tabs>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
                  <AccordionContent>
                    Beautifully designed components built with Radix UI and Tailwind.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex items-center gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Simple dialog</DialogTitle>
                    </DialogHeader>
                    Dialog body.
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Side sheet</SheetTitle>
                    </SheetHeader>
                    Slide-over content.
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>New Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge>Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>

            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/9919" alt="GitHub" />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Avatar example</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="slider">Slider</Label>
              <Slider id="slider" defaultValue={[50]} max={100} step={1} className="w-64" />
            </div>

            <div className="space-y-2">
              <Label>Progress</Label>
              <Progress value={33} className="w-64" />
            </div>

            <div className="space-y-2">
              <Label>Breadcrumb</Label>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Next App</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="space-y-2">
              <Label>Hover Card</Label>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Hover to preview</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">Preview content inside hover card.</HoverCardContent>
              </HoverCard>
            </div>

            <div className="space-y-2">
              <Label>Menubar</Label>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New</MenubarItem>
                    <MenubarItem>Open</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>

            <div className="space-y-2">
              <Label>Pagination</Label>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="space-y-2">
              <Label>Table</Label>
              <Table>
                <TableCaption>A simple table preview.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Alex</TableCell>
                    <TableCell>Engineer</TableCell>
                    <TableCell>Yes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sam</TableCell>
                    <TableCell>Designer</TableCell>
                    <TableCell>No</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
