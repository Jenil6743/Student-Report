# Import these changes to orignal code

interface DataSchema {
  user_data: UserEntry;
  tests_data: { [testId: string]: TestEntry };
  assignments_data: { assignments: AssignmentEntry[] };
  ptms_data: { ptms: PtmEntry[] };
  attendance_data: { attendance: AttendanceEntry[] };
}
