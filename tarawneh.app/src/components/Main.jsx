import "../App.css";
import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: "مقدمة ابن خلدون",
          author: "ابن خلدون",
          isbn: "1289499030",
        },
        {
          id: 2,
          title: "الحاوي في الطب",
          author: "ابو بكر الرازي",
          isbn: "893847239479",
        },
        {
          id: 3,
          title: "تفسير الأحلام",
          author: "ابن سيرين",
          isbn: "9876543210",
        },
        {
          id: 4,
          title: "إحياء علوم الدين",
          author: "أبو حامد الغزالي",
          isbn: "1234567890",
        },
        {
          id: 5,
          title: "الفهرست",
          author: "ابن النديم",
          isbn: "7483920456",
        },
        {
          id: 6,
          title: "كتاب سيبويه",
          author: "سيبويه",
          isbn: "4561237890",
        },
        {
          id: 7,
          title: "ألف ليلة وليلة",
          author: "احمد",
          isbn: "1029384756",
        },
        {
          id: 8,
          title: "كتاب الحيوان",
          author: "الجاحظ",
          isbn: "9871234560",
        },
        {
          id: 9,
          title: "المستطرف في كل فن مستظرف",
          author: "محمد الشاويش",
          isbn: "4569871230",
        },
        {
          id: 10,
          title: "الأغاني",
          author: "أبو الفرج الأصفهاني",
          isbn: "7896541230",
        },
      ],
    };
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="main-title">كتابي</h1>
        <div className="grid-container">
          {this.state.books.map((book) => (
            <div key={book.id} className="book-card">
              <h3 className="book-title">{book.title}</h3>
              <p>
                <strong>المؤلف:</strong> {book.author}
              </p>
              <p>
                <strong>ISBN:</strong> {book.isbn}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
