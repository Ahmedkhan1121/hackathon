import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import CartQuantity from '../CartQuantity/CartQuantity'
import CartProductTable from '../CartProductTable/CartProductTable'
  
function ShadTable() {
  return (
    <>
      <Table className=' '>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow className='max-[750px]:hidden'>
      <TableHead className="">Product</TableHead>
      <TableHead className='text-right max-[850px]:text-center '>Quantity</TableHead>
      {/* <TableHead>Method</TableHead> */}
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className=""><CartProductTable/></TableCell>
      <TableCell className=' flex justify-end relative top-10 left-7 max-[930px]:left-5 max-[850px]:left-0 max-[750px]:hidden max-[850px]:justify-center '><CartQuantity/></TableCell>
      {/* <TableCell>Credit Card</TableCell> */}
      <TableCell className="text-right max-[750px]:hidden">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </>
  )
}

export default ShadTable
