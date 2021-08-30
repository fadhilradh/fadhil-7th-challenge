$("#add_user").submit(() => {
  alert("User succesfully added");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  var request = {
    url: `http://localhost:5000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
    window.location.href = "/dashboard";
  });
});

if (window.location.pathname == "/dashboard") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:5000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Are you sure you want to delete this data?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
      });
      location.reload();
    }
  });
}
