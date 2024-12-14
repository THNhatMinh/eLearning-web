import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddContentForm from "./AddContentForm";

const CourseContentTab = () => {
  const [chapters, setChapters] = useState([]);
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [chapterName, setChapterName] = useState("");
  const [lessonName, setLessonName] = useState("");

  // Add Chapter
  const addChapter = () => {
    setChapters([
      ...chapters,
      { id: `chapter-${Date.now()}`, name: chapterName, lessons: [] },
    ]);
    setChapterName("");
    setIsChapterModalOpen(false);
  };

  // Add Lesson to a specific chapter
  const addLesson = () => {
    const updatedChapters = chapters.map((chapter) => {
      if (chapter.id === selectedChapterId) {
        return {
          ...chapter,
          lessons: [
            ...chapter.lessons,
            { id: `lesson-${Date.now()}`, name: lessonName, content: null },
          ],
        };
      }
      return chapter;
    });
    setChapters(updatedChapters);
    setLessonName("");
    setIsLessonModalOpen(false);
  };

  // Add Lesson Content Handler
  const handleAddContent = (chapterId, lessonId) => {
    setSelectedLesson({ chapterId, lessonId });
    setIsContentModalOpen(true);
  };

  const saveContent = (contentData) => {
    const updatedChapters = chapters.map((chapter) => {
      if (chapter.id === selectedLesson.chapterId) {
        return {
          ...chapter,
          lessons: chapter.lessons.map((lesson) =>
            lesson.id === selectedLesson.lessonId
              ? { ...lesson, content: contentData }
              : lesson
          ),
        };
      }
      return chapter;
    });

    setChapters(updatedChapters);
    setIsContentModalOpen(false);
    setSelectedLesson(null);
  };

  // Delete Chapter
  const deleteChapter = (chapterId) => {
    setChapters(chapters.filter((chapter) => chapter.id !== chapterId));
  };

  // Delete Lesson
  const deleteLesson = (chapterId, lessonId) => {
    const updatedChapters = chapters.map((chapter) => {
      if (chapter.id === chapterId) {
        return {
          ...chapter,
          lessons: chapter.lessons.filter((lesson) => lesson.id !== lessonId),
        };
      }
      return chapter;
    });
    setChapters(updatedChapters);
  };

  // Handle Drag End
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(chapters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setChapters(items);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Course Content</h2>
      <button
        onClick={() => setIsChapterModalOpen(true)}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Chapter
      </button>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="chapters" type="chapter">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {chapters.map((chapter, chapterIndex) => (
                <Draggable
                  key={chapter.id}
                  draggableId={chapter.id}
                  index={chapterIndex}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className="p-4 border rounded mb-4"
                    >
                      <div className="flex justify-between items-center">
                        <span
                          {...provided.dragHandleProps}
                          className="cursor-move text-gray-500"
                        >
                          ⋮⋮
                        </span>
                        <h3 className="text-lg font-semibold">
                          {chapter.name}
                        </h3>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedChapterId(chapter.id);
                              setIsLessonModalOpen(true);
                            }}
                            className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                          >
                            Add Lesson
                          </button>
                          <button
                            onClick={() => deleteChapter(chapter.id)}
                            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            Delete Chapter
                          </button>
                        </div>
                      </div>
                      <div className="mt-2">
                        {chapter.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="p-2 border rounded mb-2"
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="text-md font-semibold">
                                {lesson.name}
                              </h4>
                              <div className="flex gap-2">
                                <button
                                  onClick={() =>
                                    handleAddContent(chapter.id, lesson.id)
                                  }
                                  className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                >
                                  Add Content
                                </button>
                                <button
                                  onClick={() =>
                                    deleteLesson(chapter.id, lesson.id)
                                  }
                                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                  Delete Lesson
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {isChapterModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="text-lg font-bold mb-4">Add Chapter</h3>
            <input
              type="text"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
              placeholder="Chapter Name"
              className="p-2 border rounded w-full"
            />
            <div className="flex gap-4 mt-4">
              <button
                onClick={addChapter}
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsChapterModalOpen(false)}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isLessonModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="text-lg font-bold mb-4">Add Lesson</h3>
            <input
              type="text"
              value={lessonName}
              onChange={(e) => setLessonName(e.target.value)}
              placeholder="Lesson Name"
              className="p-2 border rounded w-full"
            />
            <div className="flex gap-4 mt-4">
              <button
                onClick={addLesson}
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Add
              </button>
              <button
                onClick={() => setIsLessonModalOpen(false)}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isContentModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="text-lg font-bold mb-4">Add Lesson Content</h3>
            <AddContentForm
              onSave={saveContent}
              onCancel={() => setIsContentModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseContentTab;
