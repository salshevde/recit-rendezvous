DELIMITER //
CREATE TRIGGER RETURN_POST_ID
AFTER INSERT 
ON POSTS
FOR EACH ROW
BEGIN
    INSERT INTO temp_post_id (PostID) VALUES (NEW.PostID);
END // 
DELIMITER ;
