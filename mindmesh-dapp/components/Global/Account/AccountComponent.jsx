import React from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

const AccountComponent = () => {
  return (
    <div class="main-content bg-lightblue theme-dark-bg right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
          <div class="middle-wrap">
            <div class="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div class="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                <a href="default-settings.html" class="d-inline-block mt-2">
                  <i class=" font-sm text-white">
                    <AiOutlineUserAdd />
                  </i>
                </a>
                <h4 class="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                  Account Details
                </h4>
              </div>
              <div class="card-body p-lg-5 p-4 w-100 border-0 ">
                <div class="row justify-content-center">
                  <div class="col-lg-4 text-center">
                    <figure class="avatar ms-auto me-auto mb-0 mt-2 w100">
                      <img
                        src="images/pt-1.jpg"
                        alt="image"
                        class="shadow-sm rounded-3 w-100"
                      />
                    </figure>
                    <h2 class="fw-700 font-sm text-grey-900 mt-3">
                      User
                    </h2>
                    <h4 class="text-grey-500 fw-500 mb-3 font-xsss mb-4">
                      Location
                    </h4>
                  </div>
                </div>

                <form action="#">
                  <div class="row">
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          First Name
                        </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Last Name
                        </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">Email</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">Phone</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Country
                        </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-12 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Address
                        </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Facebook
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Twitter
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Linkedin
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Instagram
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">Flickr</label>
                        <input
                          type="text"
                          name="comment-name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">Github</label>
                        <input
                          type="text"
                          name="comment-name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">Skype</label>
                        <input
                          type="text"
                          name="comment-name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">Google</label>
                        <input
                          type="text"
                          name="comment-name"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Twon / City
                        </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <label class="mont-font fw-600 font-xsss">
                          Postcode
                        </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-12 mb-3">
                      <div class="card mt-3 border-0">
                        <div class="card-body d-flex justify-content-between align-items-end p-0">
                          <div class="form-group mb-0 w-100">
                            <input
                              type="file"
                              name="file"
                              id="file"
                              class="input-file"
                            />
                            <label
                              for="file"
                              class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                            >
                              <i class=" large-icon me-3 d-block">
                                <BsFillCloudUploadFill />
                              </i>
                              <span class="js-fileName">
                                Drag and drop or click to replace
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 mb-3">
                      <label class="mont-font fw-600 font-xsss">
                        Description
                      </label>
                      <textarea
                        class="form-control mb-0 p-3 h100 bg-greylight lh-16"
                        rows="5"
                        placeholder="Write your message..."
                        spellcheck="false"
                      ></textarea>
                    </div>

                    <div class="col-lg-12">
                      <a
                        href="#"
                        class="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountComponent;
