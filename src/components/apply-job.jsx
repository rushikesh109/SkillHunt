import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from './ui/button'
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
  
const ApplyJobDrawer = ({user, job, applied=false, fetchJob}) => {
  return (
<Drawer open={applied ? false: undefined}>
  <DrawerTrigger asChild><Button
  size="lg" variant={job?.isOpen && !applied? "blue" : "destructive"}
  disabled={!job?.isOpen || applied}>
    {job?.isOpen ? (applied ? "Applied" : "Apply"): "Hiring Closed"}
  </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>{job?.title} at {job?.company?.name}</DrawerTitle>
      <DrawerDescription>Please Fill the form below</DrawerDescription>
    </DrawerHeader>
     
     <form className='flex flex-col gap-4 p-4 pb-0'>
      <Input
      type="number"
      placeholder="Years of Experience"
      className="flex-1"
      />
      <Input
      type="text"
      placeholder="Skills (Comma Separated)"
      className="flex-1"
      />
    <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="Intermediate" id="Intermediate" />
    <Label htmlFor="Intermediate">Intermediate</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="Graduate" id="Graduate" />
    <Label htmlFor="Graduate">Graduate</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="Post Graduate" id=" post-graduate" />
    <Label htmlFor="post-graduate">Post-Graduate</Label>
  </div>
</RadioGroup>

<Input
type="file"
accept=".pdf, .doc, .docx"
className='flex-1 file:text-gray-500' 
/>
<Button type="submit" variant="blue" size="lg">
    Apply
</Button>
     </form>

    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  )
}

export default ApplyJobDrawer
