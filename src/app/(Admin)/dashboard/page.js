"use client";
import { getCarList } from "@/app/store/Car/car.Api";
import { deleteImage, fileUploadCloud } from "@/utils/cloudinary";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TiDeleteOutline } from "react-icons/ti";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoMdAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import CarDialog from "./carDialog";
import CarDeleteDialog from "./carDeleteDialog";
import Image from "next/image";
const Page = () => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [carDataOne, setCarDataOne] = useState(null);
  const [scroll, setScroll] = useState("paper");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { carList, loading } = useSelector((state) => state.carlistData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarList());
  }, [dispatch]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    setCarDataOne(null);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleView = (datas) => {
    setCarDataOne({ ...datas, view: true });
    setOpen(true);
  };
  const handleDelete = (datas) => {
    setCarDataOne({ ...datas });
    setOpenDelete(true);
  };
  const handleUpdate = (datas) => {
    setCarDataOne({ ...datas });
    setOpen(true);
  };
  const handleRowClick = (row) => {
    // Toggle the selected row
    setSelectedRow(row === selectedRow ? null : row);
  };
  function extractPublicIdFromUrl(url) {
    const startIndex = url.lastIndexOf("/") + 1;
    const endIndex =
      url.lastIndexOf(".") !== -1 ? url.lastIndexOf(".") : url.length;
    return url.substring(startIndex, endIndex);
  }

  const handleDeleteImage = async (index, row, imageUrl) => {
    // setLoadingData(true);
    const publicId = extractPublicIdFromUrl(imageUrl);
    const updatedPreviews = [...row?.subImagees];
    updatedPreviews.splice(index, 1);
    const pub = await deleteImage(publicId);
    axios
      .post(`/api/cars/deleteimages/${row?._id}`, updatedPreviews)
      .then((datas) => {
        if (datas?.data?.status === 200) {
          dispatch(getCarList());
          toast.success(datas?.data?.message);
        } else {
          toast.error(datas?.data?.message);
        }
      })
      .catch((e) => {
        toast.error(e.message);
        console.log("datas", e);
      })
      .finally(() => {
        // setLoading(false);
        // setLoadingData(false);
        // setOpen(false);
      });
  };
  const columns = [
    {
      id: "coverImage",
      label: "cover Image",
      minWidth: 170,
      align: "left",
      // format: (value) => value,
      renderCell: (value) => (
        <img
          src={value}
          alt="Cover"
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      ),
    },
    { id: "title", label: "Title", minWidth: 170 },
    {
      id: "perDayCost",
      label: "perDay Cost",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "address",
      label: "Address",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "operation",
      label: "Operation",
      minWidth: 170,
      align: "center",
      // format: (value) => value,
      renderCell: (value, raw) => (
        <div className="flex gap-6 justify-center">
          <RiEditFill
            className=" size-8 font-medium cursor-pointer"
            onClick={() => handleUpdate(raw)}
          />
          <VscPreview
            className="text-[#81d8d0]   size-8 font-medium cursor-pointer"
            onClick={() => handleView(raw)}
          />
          <MdDeleteForever
            className="text-[#e97070f1]  size-8 font-medium cursor-pointer"
            onClick={() => handleDelete(raw)}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        <div className="mt-28 w-fuil">
          <div className=" shadow-lg rounded-md w-full h-full m-5 p-3">
            <div>
              <Button
                variant="contained"
                type="submit"
                className=""
                onClick={handleClickOpen("paper")}
                endIcon={<IoMdAddCircle className=" size-8 font-medium" />}
              >
                Add Car
              </Button>
            </div>
            <TableContainer sx={{ maxHeight: 640 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {carList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <>
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                          onClick={() => handleRowClick(row)}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.id === "coverImage" ||
                                column.id === "operation"
                                  ? column.renderCell(value, row)
                                  : column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                        {selectedRow === row && (
                          <TableRow key={`${row.code}-details`}>
                            <TableCell colSpan={columns.length}>
                              <div>
                                <div className="flex flex-wrap md:grid md:grid-cols-10 gap-3 lg:mt-0 mt-5 w-full">
                                  {row?.subImagees?.map((preview, index) => (
                                    <div className=" relative">
                                      <Image
                                        className="rounded-lg w-[150px] h-[80px] "
                                        src={preview}
                                        alt="wfw"
                                        height={100}
                                        width={100}
                                        key={index}
                                        // onClick={() => handleDeleteImage(index)}
                                      />
                                      <p className=" absolute top-0 right-2">
                                        <TiDeleteOutline
                                          className="text-[#f7f8f6] size-7 cursor-pointer"
                                          onClick={() =>
                                            handleDeleteImage(
                                              index,
                                              row,
                                              preview
                                            )
                                          }
                                        />
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={carList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>

      {open && (
        <CarDialog
          onAdd={""}
          onClose={handleClose}
          onUpdate={""}
          open={open}
          car={carDataOne}
        />
      )}
      {openDelete && (
        <CarDeleteDialog
          onClose={handleCloseDelete}
          open={openDelete}
          car={carDataOne}
        />
      )}
    </>
  );
};

export default Page;
