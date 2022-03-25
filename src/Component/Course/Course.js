import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import Card from "react-bootstrap/Card";
import { Grid, Row, Col } from "react-bootstrap";
import "./Course.css";
import { useNavigate } from "react-router-dom";
const Course = () => {
  const history = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const { courseId, setCourseId } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(6);
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState("");

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  const currentCourse = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const pageNumbers = [];

  //===================================================== getAllcategory

  const getAllCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/course/getall");
      if (res.data.success) {
        setAllCourses(res.data.result);
      } else throw Error;
    } catch (error) {
      if (!error.response.data.success) {
      }
    }
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //===================================================== Filter by category
  const filterByCategory = async (e) => {
    if (e.target.value == 0) {
      setCategory(0);
      return getAllCourses();
    }
    setCategory(e.target.value);
    try {
      const res = await axios.post("http://localhost:5000/course/getByC", {
        Category: e.target.value,
      });
      setAllCourses(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  //===================================================== Filter by category

  const searchByTitle = async (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      try {
        const res = await axios.post("http://localhost:5000/course/getByT", {
          Title: e.target.value,
          Category: category,
        });
        console.log(res);
        setAllCourses(res.data.results);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      let e = { target: { value: category } };
      filterByCategory(e);
    }
  };
  //===================================================== useEffect

  useEffect(() => {
    getAllCourses();
  }, []);
  for (let i = 1; i <= Math.ceil(allCourses.length / coursePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="courseMainDiv">
      <div className="FilterAndSearch">
        <div className="filterDiv">
          <select
            class="form-select form-select-lg"
            placeholder="What are you Looking For ?"
            defaultValue={0}
            onChange={filterByCategory}
          >
            <option className="hiddenOption" value={0} selected hidden>
              Filter by Category ...
            </option>
            <option value={0}>All</option>
            <option value={"Basic"}>Basic Javascript</option>
            <option value={"Backend"}>Backend</option>
            <option value={"Frontend"}>Frontend</option>
          </select>
        </div>
        <div class="input-group">
          <input
            type="search"
            class="form-control  rounded"
            placeholder="What are you Looking For ?"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => {
              // setSearch(e.target.value);
              searchByTitle(e);
            }}
          />
          <button
            type="button"
            class="btn  btn-lg "
            style={{ width: "20%" }}
            onClick={(e) => {
              searchByTitle(e);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="allCourses">
        <Row xs={1} md={4} className="g-4">
          {currentCourse.map((_, idx) => (
            <Col>
              <Card
                className="cardCourse"
                onClick={(e) => {
                  localStorage.setItem("courseId", _.id);
                  setCourseId(_.id || localStorage.getItem("courseId"));
                  history("/coursedescryption");
                }}
              >
                <Card.Img
                  variant="top"
                  className="imagCardCourse"
                  src={_.image}
                />
                <Card.Body>
                  <Card.Title>{_.Title}</Card.Title>
                  <Card.Text>{_.Author}</Card.Text>
                  <Card.Text>Price : {_.Price - 0.01} $</Card.Text>
                  <Card.Text>Start In : {_.start}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="paginationDiv">
          <ul className="paginationUl">
            {pageNumbers.map((number) => {
              return (
                <li>
                  <a
                    className="paginationUl"
                    href="#"
                    onClick={() => {
                      paginate(number);
                    }}
                  >
                    {number}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Course;
