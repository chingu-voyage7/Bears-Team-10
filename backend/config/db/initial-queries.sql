CREATE TABLE users (
    id uuid NOT NULL PRIMARY KEY UNIQUE,
    username character varying(255),
    password character varying(100),
    profile_picture character varying(255),
    display_name character varying(100),
    bio character varying(255),
    interests character varying(255),
    github character varying(100)
);

--/////////////////////////////////////////////////////////////

CREATE TABLE projects (
    project_id uuid NOT NULL PRIMARY KEY,
    project_owner_user_id uuid REFERENCES users(id),
    project_title character varying(1000),
    project_description character varying(10000),
    creation_timestamp timestamp without time zone
);


--/////////////////////////////////////////////////////////////

CREATE TABLE posts (
    post_id uuid NOT NULL PRIMARY KEY,
    project_id uuid REFERENCES projects(project_id),
    post_creator_user_id uuid REFERENCES users(id),
    post_content character varying(1000),
    creation_timestamp timestamp without time zone
);

--/////////////////////////////////////////////////////////////

CREATE TABLE project_collaborator_xref (
    project_id uuid NOT NULL REFERENCES projects(project_id),
    user_id uuid NOT NULL REFERENCES users(id),
    PRIMARY KEY (project_id, user_id)
);

