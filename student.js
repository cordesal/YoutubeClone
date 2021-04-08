let students = [
  { id: 1, name: "tran van a", className: ".net", classId: 11 },
  { id: 2, name: "tran van b", className: ".net", classId: 11 },
  { id: 3, name: "tran van c", className: "angular", classId: 12 },
  { id: 4, name: "tran van d", className: "angular", classId: 12 },
  { id: 5, name: "tran van e", className: "java", classId: 13 },
  { id: 6, name: "tran van f", className: "java", classId: 13 },
  { id: 7, name: "tran van g", className: "java", classId: 13 },
  { id: 8, name: "tran van h", className: "test", classId: 14 },
  { id: 9, name: "tran van i", className: "test", classId: 14 },
  { id: 10, name: "tran van j", className: "test", classId: 14 },
  { id: 11, name: "tran van k", className: "test", classId: 15 }
];

//normal javascript
let map = students.reduce(function(obj, student) {
    let key = `${student.classId}.${student.className}`;
    console.log(key);
    obj[key] = obj[key] || {
      classId: student.classId,
      className: student.className,
      students: [] 
    };
    obj[key].students.push({
        id: student.id,
        name: student.name,
        className: student.className,
        classId: student.classId
    });
    return obj;
  }, {});
  var result = Object.values(map);

  document.body.innerHTML =
  "<pre>" + JSON.stringify(result, null, "  ") + "</pre>";


//lodash library
let result2;

result2 = _(students)
  .groupBy("classId")
  .map(function (value, key) {
    return {
      classId: key,
      className: _.get(_.find(value, "className"), "className"),
      students: value,
    };
  })
  .value();

  document.body.innerHTML =
  "<pre>" + JSON.stringify(result2, null, "  ") + "</pre>";
