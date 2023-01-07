export default function getUsers(req, res) {
  return res.status(200).json([
    {
      id: 1,
      name: "joseph",
      age: 22,
    },
  ]);
}
