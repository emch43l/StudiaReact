import { UserContext } from "../../contexts/userContext";
import { useContext, useRef, useState } from "react";
import { AddCommentType } from "../../types/commentType";

export default function CommentForm({ addComment }: { addComment: Function }) {
  const users = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const postId = 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const comment: AddCommentType = {
      postId: postId,
      name: title,
      body: description,
      email: userEmail
    }

    console.log(comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="join w-full">
          <select
            className="select select-sm select-bordered join-item"
            onChange={(e) => setUserEmail(e.currentTarget.value)}
            defaultValue={0}
          >
            <option disabled value={""}>
              Select user
            </option>
            {users
              ? users.map((user, index) => (
                  <option key={index} value={user.email}>{user.name}</option>
                ))
              : null}
          </select>
          <div className="w-full">
            <div>
              <input
                className="input w-full input-sm input-bordered join-item"
                placeholder="Type comment title here..."
                value={title}
                onChange={e => setTitle(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <textarea
          className="textarea w-full textarea-bordered"
          placeholder="Type your comment here..."
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="mt-2 flex justify-end">
        <div>
          <button className="btn btn-sm btn-neutral">Submit</button>
        </div>
      </div>
    </form>
  );
}
