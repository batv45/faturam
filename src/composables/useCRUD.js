import { isNullOrWhitespace } from '@/utils'

const ACTIONS = {
<<<<<<< Updated upstream
  view: '查看',
  edit: '编辑',
  add: '新增',
=======
  view: 'Check',
  edit: 'edit',
  add: 'New',
>>>>>>> Stashed changes
}

export default function ({ name, initForm = {}, doCreate, doDelete, doUpdate, refresh }) {
  const modalVisible = ref(false)
  const modalAction = ref('')
  const modalTitle = computed(() => ACTIONS[modalAction.value] + name)
  const modalLoading = ref(false)
  const modalFormRef = ref(null)
  const modalForm = ref({ ...initForm })

<<<<<<< Updated upstream
  /** 新增 */
=======
  /** New */
>>>>>>> Stashed changes
  function handleAdd() {
    modalAction.value = 'add'
    modalVisible.value = true
    modalForm.value = { ...initForm }
  }

<<<<<<< Updated upstream
  /** 修改 */
=======
  /** Revise */
>>>>>>> Stashed changes
  function handleEdit(row) {
    modalAction.value = 'edit'
    modalVisible.value = true
    modalForm.value = { ...row }
  }

<<<<<<< Updated upstream
  /** 查看 */
=======
  /** Check */
>>>>>>> Stashed changes
  function handleView(row) {
    modalAction.value = 'view'
    modalVisible.value = true
    modalForm.value = { ...row }
  }

<<<<<<< Updated upstream
  /** 保存 */
=======
  /** keep */
>>>>>>> Stashed changes
  function handleSave() {
    if (!['edit', 'add'].includes(modalAction.value)) {
      modalVisible.value = false
      return
    }
    modalFormRef.value?.validate(async (err) => {
      if (err) return
      const actions = {
        add: {
          api: () => doCreate(modalForm.value),
<<<<<<< Updated upstream
          cb: () => $message.success('新增成功'),
        },
        edit: {
          api: () => doUpdate(modalForm.value),
          cb: () => $message.success('编辑成功'),
=======
          cb: () => $message.success('added successfully'),
        },
        edit: {
          api: () => doUpdate(modalForm.value),
          cb: () => $message.success('Edited successfully'),
>>>>>>> Stashed changes
        },
      }
      const action = actions[modalAction.value]

      try {
        modalLoading.value = true
        const data = await action.api()
        action.cb()
        modalLoading.value = modalVisible.value = false
        data && refresh(data)
      } catch (error) {
        modalLoading.value = false
      }
    })
  }

<<<<<<< Updated upstream
  /** 删除 */
  function handleDelete(id, confirmOptions) {
    if (isNullOrWhitespace(id)) return
    $dialog.confirm({
      content: '确定删除？',
=======
  /** delete */
  function handleDelete(id, confirmOptions) {
    if (isNullOrWhitespace(id)) return
    $dialog.confirm({
      content: 'confirm delete?',
>>>>>>> Stashed changes
      async confirm() {
        try {
          modalLoading.value = true
          const data = await doDelete(id)
<<<<<<< Updated upstream
          $message.success('删除成功')
=======
          $message.success('successfully deleted')
>>>>>>> Stashed changes
          modalLoading.value = false
          refresh(data)
        } catch (error) {
          modalLoading.value = false
        }
      },
      ...confirmOptions,
    })
  }

  return {
    modalVisible,
    modalAction,
    modalTitle,
    modalLoading,
    handleAdd,
    handleDelete,
    handleEdit,
    handleView,
    handleSave,
    modalForm,
    modalFormRef,
  }
}
