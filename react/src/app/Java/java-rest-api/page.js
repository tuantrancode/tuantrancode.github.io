export const metadata = {
  title: 'REST API',
  description: 'Notes on REST API',
};

export default function RestAPI() {
  return (
    <>
      <h2 className='section-header'>REST API</h2>
      <p>A way for software systems to communicate over the web using standard HTTP methods </p>
      <h4 className='sub-section-header'>HTTP Methods</h4>
      <table>
        <thead>
          <tr>
            <th>HTTP Method</th>
            <th>Action</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>Read</td>
            <td>Fetch data (no changes)</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>Create</td>
            <td>Add a new resource</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>Update</td>
            <td>Replace an existing resource</td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td>Update partially</td>
            <td>Modify part of a resource</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>Delete</td>
            <td>Remove a resource</td>
          </tr>
        </tbody>
      </table>

      <h4 className='sub-section-header'>REST endpoints example</h4>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Method</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>/users</td>
            <td>GET</td>
            <td>Get all users</td>
          </tr>
          <tr>
            <td>/users/5</td>
            <td>GET</td>
            <td>Get user with ID 5</td>
          </tr>
          <tr>
            <td>/users</td>
            <td>POST</td>
            <td>Create a new user</td>
          </tr>
          <tr>
            <td>/users/5</td>
            <td>PUT</td>
            <td>Update user 5 completely</td>
          </tr>
          <tr>
            <td>/users/5</td>
            <td>DELETE</td>
            <td>Delete user 5</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
