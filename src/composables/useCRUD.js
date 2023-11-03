import { isNullOrWhitespace } from '@/utils'

const ACTIONS = {
  view: 'Check',
  edit: 'edit',
  add: 'New',
}

export default function ({ name, initForm = {}, doCreate, doDelete, doUpdate, refresh }) {
  const modalVisible = ref(false)
  const modalAction = ref('')
  const modalTitle = computed(() => ACTIONS[modalAction.value] + name)
  const modalLoading = ref(false)
  const modalFormRef = ref(null)
  const modalForm = ref({ ...initForm })

  /** New */
  function handleAdd() {
    modalAction.value = 'add'
    modalVisible.value = true
    modalForm.value = { ...initForm }
  }

  /** Revise */
  function handleEdit(row) {
    modalAction.value = 'edit'
    modalVisible.value = true
    modalForm.value = { ...row }
  }

  /** Check */
  function handleView(row) {
    modalAction.value = 'view'
    modalVisible.value = true
    modalForm.value = { ...row }
  }

  /** keep */
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
          cb: () => $message.success('added successfully'),
        },
        edit: {
          api: () => doUpdate(modalForm.value),
          cb: () => $message.success('Edited successfully'),
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

  /** delete */
  function handleDelete(id, confirmOptions) {
    if (isNullOrWhitespace(id)) return
    $dialog.confirm({
      content: 'confirm delete?',
      async confirm() {
        try {
          modalLoading.value = true
          const data = await doDelete(id)
          $message.success('successfully deleted')
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
