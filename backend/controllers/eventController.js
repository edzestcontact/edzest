


          const Event = require("../models/Event");

          // ✅ POST - Create Event
          exports.createEvent = async (req, res) => {
            try {
              const {
                title,
                description,
                date,
                time,
                type,
                speaker,
                link,
                linkedin,
              } = req.body;

              const wallpaperUrl = req.file
                ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
                : null;

                console.log("🖼️ req.file = ", req.file);
          console.log("✅ Wallpaper URL:", wallpaperUrl);

              const newEvent = new Event({
                title,
                description,
                date,
                time,
                type,
                speaker,
                link,
                linkedin,
                wallpaper: wallpaperUrl, // ✅ only fix added
              });

              await newEvent.save();
              console.log("✅ Event created with image:", wallpaperUrl);
              res.status(201).json({ message: "Event created successfully" });
            } catch (error) {
              console.error("❌ Error creating event:", error);
              res.status(500).json({ message: "Server Error" });
            }
          };

          // ✅ GET - Fetch All Events
          exports.getAllEvents = async (req, res) => {
            try {
              const events = await Event.find().sort({ createdAt: -1 });
              res.json(events);
            } catch (error) {
              res.status(500).json({ message: "Failed to fetch events" });
            }
          };

          // ✅ PUT - Update Event
          exports.updateEvent = async (req, res) => {
            try {
              const updateFields = { ...req.body };

              // ✅ If a new wallpaper file is uploaded, handle it
              if (req.file) {
                const wallpaperUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
                updateFields.wallpaper = wallpaperUrl;
              }

              const updated = await Event.findByIdAndUpdate(req.params.id, updateFields, { new: true });
              res.json(updated);
            } catch (error) {
              console.error("❌ Error updating event:", error);
              res.status(500).json({ message: "Update failed" });
            }
          };

          // ✅ DELETE - Delete Event
          exports.deleteEvent = async (req, res) => {
            try {
              await Event.findByIdAndDelete(req.params.id);
              res.json({ message: "Deleted successfully" });
            } catch (error) {
              res.status(500).json({ message: "Deletion failed" });
            }
          };
