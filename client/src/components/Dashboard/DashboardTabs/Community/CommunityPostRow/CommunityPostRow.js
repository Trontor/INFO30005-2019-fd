import React from "react";

const CommunityPostRow = () => {
  return (
    <tr>
      <td>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="exampleCheck1" />
        </div>
      </td>
      <td>John</td>
      <td>12/04/2019</td>
      <td>
        <a href="#">How to upload?</a>
      </td>
      <td>Tom</td>
      <td>published</td>
      <td>
        <span class="post-number">4</span>
      </td>
    </tr>
  );
};

export default CommunityPostRow;
